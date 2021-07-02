export const cartMessageStyles = theme => {
    return({
        container:{
            marginTop: '20px'
        },
        buttons:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 1px #5c4000',
            fontFamily: 'Rubik',
            width: '10em',
            color: '#5c4000',
            padding: '6px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'2.5px 0',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#5c4000',
            }

        },
        text:{
            textAlign: 'center'
        },
        buttonContainer:{
            display: 'flex',
            justifyContent: 'center'
        }
    })
}