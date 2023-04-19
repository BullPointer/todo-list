

const getApi = () => {
    const athome = JSON.parse(localStorage.getItem('todo'));
    return athome[0];
}


export default getApi;