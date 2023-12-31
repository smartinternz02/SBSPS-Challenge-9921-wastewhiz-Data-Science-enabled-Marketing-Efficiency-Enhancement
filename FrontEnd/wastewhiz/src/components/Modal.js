import Swal from "sweetalert2";

const Modal = (props) => {
    Swal.fire({
        icon: props.icon,
        iconColor: props.iconColor || '#FA2A55',
        confirmButtonColor: props.iconColor || '#FA2A55',
        title: props.title,
        text: props.text,
    }).then(() => {
        props.onClear();
    });
}

export default Modal;