import { StyleSheet } from "react-native";

export const Styles=StyleSheet.create({
    contaier:{
        flex:1,
        margin:10,
    },
    pageTitle:{
        textAlign:'center',
        fontSize:21,
        fontWeight:'bold',
        margin:10,
        marginBottom:25,
    },
    districtText:{
        fontWeight:'bold',
        color:'#5d5e5e',
        textAlign:'right',
        marginRight:10,
        fontSize:16,   
    },
    selectPost:{
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        fontSize:20,
    },
    selectPostInput:{
        paddingLeft:17,
        paddingTop:12,
        paddingBottom:12,
        paddingRight:12,
        borderWidth:2,
        borderColor:'#abb0b8',
        borderBottomWidth:2,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    selectPostOption:{
        fontSize:18,
        color:'#000000',
    },
    batchJoinedText:{
        fontWeight:'bold',
        color:'#5d5e5e',
        textAlign:'right',
        marginRight:10,
        fontSize:16,   
    },
    batchpassedOutText:{
        fontWeight:'bold',
        color:'#5d5e5e',
        textAlign:'right',
        marginRight:10,
        fontSize:16,   
    },
    degreeText:{
        fontWeight:'bold',
        color:'#5d5e5e',
        textAlign:'right',
        marginRight:10,
        fontSize:16,   
    },

    inputContainer:{
        borderWidth:2,
        borderColor:'#abb0b8',
        borderBottomWidth:2,
        borderRadius:8,
        paddingLeft:7,
        paddingRight:7,
    },
    input:{
        paddingLeft:10,
        paddingRight:3,
        
    },
    lableStyle:{
        color:'#585959',
        textAlign:'right',
    },
    buttonCompany:{
        marginLeft:10,
        marginRight:10,
        marginTop:3,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'#abb0b8',
        borderBottomWidth:2,
        borderRadius:8,
    },
    buttonCompanyTitle:{
        color:'black',
    },
    buttonCompanyIcon:{
        padding:30,
        backgroundColor:'red'
    },
    showUserCompanyOverlayMain:{
        width:'90%',
        borderRadius:20,
    
    },
    showUserCompanyOverlayInnerView:{
        marginTop:10,
        marginBottom:10,
        flexDirection:'column',
        alignItems:'center'
    },
    showUserCompanyOverlayCancelIcon:{
        alignSelf:'flex-end',

    },
    companyFilterButtonOverlay:{
        marginTop:3,
        borderRadius:5,
        marginLeft:7,
        marginRight:7,
    },
    overlayCompanyNoResultFoundView:{
        marginLeft:7,
        marginRight:7,
    },
    overlayCompanyNoResultFoundViewText:{
        textAlign:'center',
        color:'red',
        fontSize:15,

    },
    overlayCompanyNoResultFoundViewButton:{
        marginTop:5,
    },
    overlayCompanyNoResultFoundViewButtonTitle:{
        marginLeft:5,
    },
    addCompanyOverlayConfirmationMain:{
        width:'90%'
    },
    addCompanyOverlayConfirmationView:{
        padding:6,
    },
    addCompanyOverlayConfirmationTitle:{
        fontSize:17,
        marginBottom:7,
    },
    addCompanyOverlayConfirmationContent:{
        fontSize:14,
        marginBottom:10,
    },
    addCompanyOverlayConfirmationButtonsView:{ 
        flexDirection: 'row', justifyContent: 'center' 
    },
    addCompanyOverlayConfirmationButtonNo:{
        backgroundColor:'red',
        marginRight:10,
    },
    addCompanyOverlayConfirmationButtonYes:{
        backgroundColor:'green',
        marginLeft:20,
    },
    addCompanyOverlayConfirmationButtonIcon:{
        marginRight:3,
    },
    CompanyStoreOverlayMain:{
        width:'70%',
        borderRadius:5,
    },
    CompanyStoreOverlayView:{
        padding:10,
    },
    CompanyStoreOverlayTitle:{
        fontSize:17,
    },
    CompanyStoreOverlayContent:{
        fontSize:14,
        marginBottom:7,
    },
});