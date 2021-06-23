export const navBarStyles = theme => {
    return({
        appBar: {
            backgroundColor: '#f5ab00',
            position: 'static'

        },
        toolBar:{
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20 
        },
        title:{
            flexGrow: 1,
            fontFamily: 'Rubik',   
            fontWeight: 400
        },
        titleLink:{
            textDecoration: 'none',
            color: '#ffffff'
        },
        buttons:{
            color: '#5c4000',
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'Rubik',
            '&:hover':{
                color: '#ffffff',
                backgroundColor: 'transparent'
            },
            textDecoration: 'none',
            padding: '0.5rem',
            textTransform: 'uppercase'
        },
        list:{
            listStyle: 'none',
            display: 'flex'
        }
    })
}