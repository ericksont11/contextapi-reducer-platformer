export const characterReducer = (state, action) => {
    switch (action.type) {
        case 'MOVE_LEFT':
            return {
                ...state,
                left: parseFloat(state.left) - state.speed + '%',
                jumpSpeed: state.jumpSpeed
            }
        case 'MOVE_RIGHT':
            return {
                ...state,
                left: parseFloat(state.left) + state.speed + '%',
            }
        case 'MOVE_UP':
            return {
                ...state,
                jumping: true,
                top: parseFloat(state.top) - state.jumpSpeed + '%',
                jumpSpeed: state.jumpSpeed / 2
            }
        case 'BEGIN_FALLING':
            return {
                ...state,
                top: parseFloat(state.top) + state.jumpSpeed * 2 + '%',
                jumpSpeed: state.jumpSpeed * 4
            }
        case 'MOVE_DOWN':
            return {
                ...state,
                top: parseFloat(state.top) + state.jumpSpeed + '%',
                jumpSpeed: state.jumpSpeed * 2
            }
        case 'LEVEL_UP':
            return {
                ...state,
                jumpSpeed: 10,
                jumping: false,
                level: state.level + 1
            }
        case 'RESET_JUMP':
            return {
                ...state,
                jumpSpeed: 10,
                jumping: false
            }
        case 'RESET':
            return {
                ...state,
                left: '1%',
                top: '93%'
            }
        default:
            return state
    }

};