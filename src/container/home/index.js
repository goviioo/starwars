import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getCharacterList } from '../../api';
import { CharacterComponent } from 'component/molecules/Character';
import { resetCharacterList } from '../../redux/actions';
import { wp } from 'res/style/mixins';
import { BasicTextField } from '../../component/atoms/basicTextField';
import { SearchHeader } from '../../component/molecules/Headers/searchableHeader';
import { BasicLoader } from '../../component/atoms/loader';
import apiConstants from '../../api/apiConstants.json'
import { EmptyComponent } from '../../component/molecules/Placeholders/emptyComponent';
import { ErrorComponent } from '../../component/molecules/Placeholders/errorComponent';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: null
        }
    }

    componentDidMount() {
        const initialUrl =
            this.getInitialList();
    }

    getInitialList() {
        this.props.reset();
        this.props.fetchCharList();
    }

    fetchMore() {
        const { nextPageUrl, fetchCharList } = this.props;
        if (nextPageUrl !== null) {
            fetchCharList(nextPageUrl)
        }
    }
    handleOnChange(text) {
        this.setState({
            searchText: text
        });
        const url = apiConstants.getCharacterList + text;
        this.props.reset();
        this.props.fetchCharList(url);
    }
    openDetails(item) {
        this.props.navigation.push('Details', { url: item?.url })
    }
    render() {
        const { getCharListPending,
            getCharListError,
            characterList, } = this.props;
        const { searchText } = this.state;
        const { height } = Dimensions.get('window');
        return (
            <View style={styles.containerStyle}>
                {getCharListPending && characterList.length == 0 && searchText == null && <BasicLoader />}
                <SearchHeader value={searchText} onChange={(text) => this.handleOnChange(text)} />
                {characterList.length == 0 && !getCharListPending && <EmptyComponent />}
                {getCharListError && <ErrorComponent />}
                <FlatList
                    style={{ width: '100%', height }}
                    data={characterList}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <CharacterComponent onPress={() => this.openDetails(item)} name={item?.name} hairColor={item?.hair_color}
                                skinColor={item?.skin_color}
                            />
                        )
                    }}
                    refreshing={getCharListPending}
                    onRefresh={() => this.getInitialList()}
                    onEndReached={() => this.fetchMore()}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={() => getCharListPending ? <ActivityIndicator /> : null}
                    initialNumToRender={10}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        width: wp(100)
    }
})

const mapStateToProps = (state) => {
    const { getCharListPending,
        getCharListError,
        characterList,
        nextPageUrl } = state.characterReducer
    return {
        getCharListPending,
        getCharListError,
        characterList,
        nextPageUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharList: (url) => dispatch(getCharacterList(url)),
        reset: () => dispatch(resetCharacterList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);