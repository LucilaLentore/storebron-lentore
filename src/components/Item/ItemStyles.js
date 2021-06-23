export const itemStyles = theme => {
    return({
        root: {
            maxWidth: 345,
            margin: '10px',
        },
        cardAction:{
            display: 'flex',
            justifyContent: 'center'
            
        },
        precio:{
            fontSize: '40px'
        },
        titulo:{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '5px'
        },
        titleLink:{
            textDecoration: 'none',
            '&:visited':{
                color: '#000000'
            },
            '&:hover':{
                color: '#f5ab00'
            }
        }
    })
}