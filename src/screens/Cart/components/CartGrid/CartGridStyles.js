export const cartGridStyles = theme => {
    return({
        container:{
            display: 'flex',
            justifyContent: 'center'
        },
        headerTable:{
            backgroundColor: '#e6e6e6'
        },
        tableContainer:{
            width: '80%',
            marginTop: '5%'
        },
        imgProducto:{
            maxWidth: '8rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        }
    })
}