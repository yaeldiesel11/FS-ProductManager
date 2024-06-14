import axios from "axios";

const ProductDelete = ({ id, deleteProduct }) => {

    const onClickHandler = () => {
        axios
            .delete(`http://localhost:8080/api/${id}/delete`);
        deleteProduct(id)
    }

    return (
        <button onClick={onClickHandler}> Delete </button>
    )
}

export default ProductDelete;