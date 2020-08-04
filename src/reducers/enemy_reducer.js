export const enemyReducer = (state, action) => {
    switch (action) {
        case 'START':
            return [
                {
                    ...state[0],
                    movement: 'start',
                },
                ...state.slice(1)
            ]
        case 'MOVE_LEFT_0':
            return [
                {
                    ...state[0],
                    left: parseFloat(state[0].left) - 1 + '%',
                },
                ...state.slice(1)
            ]
        case 'MOVE_RIGHT_0':
            return  [
                {
                    ...state[0],
                    left: parseFloat(state[0].left) + 1 + '%',
                },
                ...state.slice(1)
            ]
        case 'MOVE_LEFT_1':
            return [
                ...state.slice(0,1),
                {
                    ...state[1],
                    left: parseFloat(state[1].left) - 1 + '%',
                },
                ...state.slice(2)
            ]
        case 'MOVE_RIGHT_1':
            return  [
                ...state.slice(0, 1),
                {
                    ...state[1],
                    left: parseFloat(state[1].left) + 1 + '%',
                },
                ...state.slice(2)
            ]
        case 'MOVE_LEFT_2':
            return [
                ...state.slice(0,2),
                {
                    ...state[2],
                    left: parseFloat(state[2].left) - 1 + '%',
                },
                ...state.slice(3)
            ]
        case 'MOVE_RIGHT_2':
            return  [
                ...state.slice(0, 2),
                {
                    ...state[2],
                    left: parseFloat(state[2].left) + 1 + '%',
                },
                ...state.slice(3)
            ]
        case 'MOVE_LEFT_3':
            return [
                ...state.slice(0,3),
                {
                    ...state[3],
                    left: parseFloat(state[3].left) - 1 + '%',
                },
                ...state.slice(4)
            ]
        case 'MOVE_RIGHT_3':
            return  [
                ...state.slice(0, 3),
                {
                    ...state[3],
                    left: parseFloat(state[3].left) + 1 + '%',
                },
                ...state.slice(4)
            ]
        case 'MOVE_LEFT_4':
            return [
                ...state.slice(0,4),
                {
                    ...state[4],
                    left: parseFloat(state[4].left) - 1 + '%',
                },
                ...state.slice(5)
            ]
        case 'MOVE_RIGHT_4':
            return  [
                ...state.slice(0, 4),
                {
                    ...state[4],
                    left: parseFloat(state[4].left) + 1 + '%',
                },
                ...state.slice(5)
            ]
        case 'MOVE_LEFT_5':
            return [
                ...state.slice(0,5),
                {
                    ...state[5],
                    left: parseFloat(state[5].left) - 1 + '%',
                }
            ]
        case 'MOVE_RIGHT_5':
            return  [
                ...state.slice(0, 5),
                {
                    ...state[5],
                    left: parseFloat(state[5].left) + 1 + '%',
                }
            ]
        case 'RESET':
            return  [
                {
                    ...state[0],
                    left: '30%',
                },
                {
                    ...state[1],
                    left: '70%',
                },
                {
                    ...state[2],
                    left: '90%',
                },
                {
                    ...state[3],
                    left: '10%',
                },
                {
                    ...state[4],
                    left: '10%',
                }
            ]
        default:
            return state
    }

};