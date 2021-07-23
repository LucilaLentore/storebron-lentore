export const finalizarCompraStyles = theme => {
    return({
        cardContainer:{
            marginTop:'15px'
        },
        cardContent:{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            alignItems: 'center'
        },
        buttonOk:{
            marginTop: '10px',
            border: 'solid 1px #5c4000',
            fontFamily: 'Rubik',
            color: '#5c4000',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#5c4000',
            }
        }
    })
}