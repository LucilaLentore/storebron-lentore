const commonWeight = {
    fontWeight: 'bold',
}
export const itemDetailStyles = theme => {
    return({
        gridContainer:{
            marginTop: '20px'
        },
        precio:{
            fontSize: '50px'
        },
        titulo:{
            ...commonWeight,
            margin: '15px 0px'
        }
    })
}