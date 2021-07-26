import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getCharacterList } from '../../api';
import { CharacterComponent } from 'component/Character';
import { resetCharacterList } from '../../redux/actions';
import { wp } from 'res/style/mixins';
import { BasicTextField } from '../../component/atoms/basicTextField';
import { SearchHeader } from '../../component/molecules/Headers/searchableHeader';
import { BasicLoader } from '../../component/atoms/loader';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getInitialList();
    }

    getInitialList() {
        this.props.reset();
        this.props.fetchCharList();
    }

    fetchMore() {
        const { nextPageUrl, fetchCharList } = this.props;
        if (nextPageUrl !== null) {
            console.log("endReached")
            fetchCharList(nextPageUrl)
        }
    }

    render() {
        const { getCharListPending,
            getCharListSuccess,
            getCharListError,
            characterList,
            nextPageUrl } = this.props;
        const { height } = Dimensions.get('window');
        console.log(getCharListPending, "character list")
        return (
            <View style={styles.containerStyle}>
                {getCharListPending&&characterList.length==0&& <BasicLoader />}
                <SearchHeader />
                <FlatList
                    style={{ width: '100%', height }}
                    data={characterList}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        console.log(item, "haircolor")
                        return (
                            <CharacterComponent name={item?.name} hairColor={item?.hair_color}
                                skinColor={item?.skin_color}
                            />
                        )
                    }}
                    refreshing={false}
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
        getCharListSuccess,
        getCharListError,
        characterList,
        nextPageUrl } = state.characterReducer
    return {
        getCharListPending,
        getCharListSuccess,
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