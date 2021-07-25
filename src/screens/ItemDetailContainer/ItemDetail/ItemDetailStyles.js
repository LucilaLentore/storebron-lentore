const commonWeight = {
    fontWeight: 'bold',
}
export const itemDetailStyles = theme => {
    return({
        gridContainer:{
            marginTop: '20px',
            [theme.breakpoints.between('xs', 'md')]:{
                margin: 0
            }
        },
        precio:{
            fontSize: '50px',
            [theme.breakpoints.only('xs')]:{
                fontSize: '30px',
            }
        },
        titulo:{
            ...commonWeight,
            margin: '15px 0px',
            [theme.breakpoints.only('xs')]:{
                fontSize: '2rem',
            }
        }
    })
}