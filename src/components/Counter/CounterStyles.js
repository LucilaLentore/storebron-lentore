const commonJustify = {
    display: 'flex',
    justifyContent: 'center',
}

const commonDirection = {
    flexDirection: 'column',  
}

const commonAlign = {
    alignSelf: 'center'
}

const commonColor = {
    color: '#5c4000'
}

export const counterStyles = theme => {
    return({
        generalContainer: {
            ...commonJustify,
            ...commonDirection,
            margin: '20px 0px'
        },
        container:{
            ...commonJustify,
        },
        buttonsContainer: {
            ...commonJustify,
            ...commonDirection
        },
        counter:{
            ...commonAlign
        },
        buttonCart: {
            ...commonAlign,
            marginTop: '10px',
            border: 'solid 1px #5c4000',
            fontFamily: 'Rubik',
            ...commonColor,
            '&:hover':{
                color: '#FFFFFF',
                backgroundColor: '#5c4000',
            }
        },
        counterButtons:{
            ...commonColor
        }
    })
}