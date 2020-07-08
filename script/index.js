const showMap = () => {
    let form = document.getElementById('map');
    if (form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
};
const hiddenMap = () => {
    let form = document.getElementById('map');
    if (form.style.display = 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'none';
    }
};
const showHelper = () => {
    let form = document.getElementById('helper');
    if (form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
};
const hideHelper = () => {
    let form = document.getElementById('helper');
    if (form.style.display = 'flex') {
        form.style.display = 'none';
    } else {
        form.style.display = 'none';
    }
};

const send = () => {
    let form = document.getElementById('popup');
    if (form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
};
const successOperation = () => {
    let form = document.getElementById('popup__success');
    if (form.style.display == 'none' || form.style.display == '') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
};
