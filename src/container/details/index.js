import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getCharacterDetails } from '../../api';
import { BasicText } from '../../component/atoms/basicText';
import { BasicLoader } from '../../component/atoms/loader';
import { CharacterFace } from '../../component/molecules/CharacterFace';
import { ErrorComponent } from '../../component/molecules/Placeholders/errorComponent';
import { colors } from '../../res/style/colors';
import { fontSizes } from '../../res/style/fontStyle';

class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noData: false
        }
    }
    componentDidMount() {
        console.log(this.props.route.params.url)
        this.getCharDetails();
    }
    getCharDetails() {
        const { url } = this.props.route.params;
        if (url) {
            this.props.fetchCharDetails(this.props.route.params.url)
        } else {
            this.setState({
                noData: true
            })
        }
    }
    render() {
        const { charDetails, getCharDetailsPending, getCharDetailsError } = this.props;
        console.log(charDetails, "charDetails");
        return (
            <View style={{ flex: 1 }}>
                {getCharDetailsPending && <BasicLoader />}
                {getCharDetailsError && <ErrorComponent />}
                <View style={styles.topHeader}>
                    <CharacterFace size={120} hairColor={charDetails?.hair_color} />
                    <BasicText customStyle={styles.nameFont} text={charDetails?.name || 'NA'} />
                    <BasicText text={charDetails?.birth_year} />
                </View>
                <View>
                    <Details keyProp="Height" value={charDetails?.height} />
                    <Details keyProp="Mass" value={charDetails?.mass} />
                    <Details keyProp="Gender" value={charDetails?.gender} />
                    <Details keyProp="Skin Color" value={charDetails?.skin_color} />
                    <Details keyProp="Hair Color" value={charDetails?.hair_color} />
                </View>
            </View>
        )
    }
}

const Details = ({ keyProp = 'key', value = 'value' }) => {
    return (

        <View style={styles.tableCont}>
            <BasicText customStyle={styles.nameFont} text={keyProp} />
            <BasicText customStyle={styles.nameFont} text={value} />
        </View>
    )
}

const styles = StyleSheet.create({
    nameFont: {
        fontWeight: 'bold',
        fontSize: fontSizes.name,
        marginTop: 10
    },
    topHeader: {
        flex: 0.5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tableCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40
    }
})


const mapStateToProps = (state) => {
    const { getCharDetailsPending,
        getCharDetailsSuccess,
        getCharDetailsError,
        charDetails,
    } = state.characterReducer
    return {
        getCharDetailsPending,
        getCharDetailsSuccess,
        getCharDetailsError,
        charDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharDetails: (url) => dispatch(getCharacterDetails(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);