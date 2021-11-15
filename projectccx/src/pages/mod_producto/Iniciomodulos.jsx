import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import {Link} from 'react-router-dom';
import images from 'images/index_img';


function Iniciomodulos () {
    return(
        <div className="iniciomodulos">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                 <div class="sidebar-menu">
                    <ul>
                        <li>
                            <Link to ="/inicio/Home" ><span className="home"><img src= {images.img_homew}/></span>
                            <span>Inicio</span></Link>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="/mod_producto/Registerproduct" class="nav__link"><img src={images.img_storew} />Productos</Link>
                                <img src={images.img_arrowdropdown} class="list__arrow"/>
                            </div>

                            <ul class="list__show">
                                <li class="list__inside">
                                    <Link to="/mod_producto/Registerproduct" class="nav__link nav__link--inside">Registro de productos</Link>
                                </li>

                                <li class="list__inside">
                                    <Link to="/mod_producto/Listproducts" class="nav__link nav__link--inside">Información de productos</Link>
                                </li>
                                <li class="list__inside">
                                    <Link to="/mod_producto/Edicionproducts" class="nav__link nav__link--inside">Edición de productos</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="/mod_inventarios/Inquiryinv" class="nav__link"><img src={images.img_inventoryw} />Inventario</Link>
                                <img src={images.img_arrowdropdown} class="list__arrow"/>
                            </div>

                        <ul class="list__show">
                            <li class="list__inside">
                                <Link to="/mod_inventarios/Inquiryinv" class="nav__link nav__link--inside">Registro de Inventario</Link>
                            </li>

                            <li class="list__inside">
                                <Link to="/mod_inventarios/Invrecord" class="nav__link nav__link--inside">Almacenamiento de productos</Link>
                            </li>
                        </ul>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="/inicio/Home" class="nav__link"><img src={images.img_return}/>Volver</Link>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
            <header>
                <div>
                    <img src={images.img_logo} width="60px" height="60px"/>
                </div>
                <div className="name-company">
                    <h2><span>Tecnosoluciones</span></h2>
                </div>
                <div className="user-wrapper">
                    <img src={images.img_user} width="40px" height="40px" alt=""/>
                    <p><h4>Administrador</h4>
                    <small>Super Admin</small></p>
                </div>
            </header>
            <script src = "./main.js"></script>
        </div>
    

    );
}
    export default Iniciomodulos;
