import { toast } from 'react-toastify';

export const createToast = msg => toast.loading(msg, {position: "bottom-right",});

export const updateToastError = (id, msg) => {
    toast.update(id, {
        position: "bottom-right",
        render: msg, 
        type: "error", 
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        className: 'toast-container'
    });
}

export const updateToastSuccess = (id, msg) => {
    toast.update(id, {
        position: "bottom-right",
        render: msg, 
        type: "success", 
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        className: 'toast-container'
    });
}

export const showSuccess = msg => toast.success(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'toast-container'
});

export const showError = msg => toast.error(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'toast-container'
});

export const showMsg = message => {
    const {msg, type} = message;

    const config = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-container'
    };

    if (type === 'success') toast.success(msg, config); 
    else toast.error(msg, config); 
}    