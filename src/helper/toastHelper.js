import { toast } from 'react-toastify';

export const createToast = msg => toast.loading(msg);
export const updateToastError = (id, msg) => {
    toast.update(id, {
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
        render: msg, 
        type: "success", 
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        className: 'toast-container'
    });
}