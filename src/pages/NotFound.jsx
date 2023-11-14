import React from 'react'

const NotFound = () => {
    console.log(window.location);
    return (

        <div class="container">
            <br /><br /><br />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <a href="#" onclick="javascript:history.back(); return false;" style={{ padding: "5px 15px", backgroundColor: "#cdc077", color: "#024F3D" }}>Вернуться назад</a>
                <a href="/catalog" style={{ padding: "5px 15px", backgroundColor: "#cdc077", color: "#024F3D" }}>В каталог товаров</a>
                <a href="/" style={{ padding: "5px 15px", backgroundColor: "#cdc077", color: "#024F3D" }}>На главную страницу</a>
            </div>
        </div>
    )
}

export default NotFound