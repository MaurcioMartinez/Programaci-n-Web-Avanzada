var idioma = true;
function normal() {
  document.body.style.background = "#D0E8B7";
  document.body.style.color = "#E6B962";
}
function dark() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}
function esp() {
  idioma = true;
  document.getElementById("Slogan").textContent =
    "Carne asada estilo brasileño";
  document.getElementsByTagName("a")[0].textContent = "Principal";
  document.getElementsByTagName("a")[1].textContent = "Menu";
  document.getElementsByTagName("a")[2].textContent = "Galeria de Fotos";

  try {
    document.getElementById("pollo").textContent =
      "Deliciosa espada de pollo, marinada con la mejor receta que pudo haberexisitido llena de sabor y alegria para el estomago por solo $250 pesos el buffet por persona puedes disfrutar de este manjar.";
  } catch {
    try {
      document.getElementById("arrachera").textContent =
        "La arrachera es un corte de carne de res, de origen mexicano, llamado así en México y conocido con otros nombres en muchos países. Proviene del diafragma del animal, un músculo que separa los pulmones del estómago. Es una carne llena de nervios por lo que en su estado natural, es muy dura, por lo que se han diseñado procesos para hacerla más comestible y sabrosa. Uno de los procesos se llama «tenderizacion», que significa cortar los ligamentos o nervios que soportan el peso de las vísceras de la res. Al hacer esto, la carne se vuelve más masticable, ya que los nervios son muy firmes; otro proceso es el 'marinado' consistente en aderezar la carne con ciertas especias e ingredientes como el vinagre que la vuelven más suave y a la vez con mejor sabor. Por solo $250 puedes obtener este rico platillo.";
    } catch {
      try {
        document.getElementById("sirloin").textContent =
          "Es conocido por ser un corte de carne fino y por su segundo nombre 'Churrasco', tiene una forma ovalada y es de grandes dimensiones en comparación de los demás debido a que se moldea la pieza con película plástica para su congelación.Considerado un corte magro (limpio, sin grasa y sin nervios) por su poca cantidad de marmoleo y sin hueso. Es un producto nacional. Obtenlo en amazonia por el modico precio de $300";
      } catch {
        document.getElementById("inicio").textContent =
          "El auténtico sabor brasileño con más de 15 años de experiencia y los pioneros en Morelia. Fundado por brasileños con recetas propias de Brasil y el cual dio origen a este concepto de espadas brasileñas en la ciudad de Morelia. El Restaurant Amazonia ofrece más de una docena de carnes a la brasa, asados y sazonados a la perfección. Auténticos aperitivos brasileños, ensaladas y exquisitos postres, todo hecho al momento, hacen que su estancia sea una experiencia gastronómica inolvidable! Ponemos a tu disposición una gran variedad de distintas ensaladas frescas, nuestros meseros llegarán hasta tu mesa portando gran variedad de carnes sirviéndote nuestros deliciosos cortes en la cantidad que quieras y las veces que quieras. La carne que utilizamos todos los días son de la mejor calidad y siempre fresca. El tiempo que transcurre entre la parrilla a tu plato no es mayor a un minuto por lo cual se garantiza siempre comida fresca y en su punto.";
      }
    }
  }

  document.getElementsByTagName("button")[0].textContent = "Normal";
  document.getElementsByTagName("button")[1].textContent = "Modo Oscuro";
  document.getElementsByTagName("button")[2].textContent = "Mapa";
  document.getElementsByTagName("button")[3].textContent = "Ingles";
  document.getElementsByTagName("button")[4].textContent = "Espanol";
  document.getElementsByTagName("button")[5].textContent = "Oferta 1";
  document.getElementsByTagName("button")[6].textContent = "Oferta 2";
  document.getElementsByTagName("button")[7].textContent = "Oferta 3";
}
function ing() {
  idioma = false;
  document.getElementById("Slogan").textContent = "Brazilian style roast beef";
  document.getElementsByTagName("a")[0].textContent = "Main Page";
  document.getElementsByTagName("a")[1].textContent = "Restaurant Menu";
  document.getElementsByTagName("a")[2].textContent = "Photo gallery";

  try {
    document.getElementById("pollo").textContent =
      "Delicious chicken sword, marinated with the best recipe that could have been full of flavor and joy for the stomach for only $ 250 pesos the buffet per person you can enjoy this delicacy.";
  } catch {
    try {
      document.getElementById("sirloin").textContent =
        "It is known for being a thin meat cut and by its middle name 'Churrasco', it has an oval shape and is large in comparison to the others because the piece is molded with plastic film for freezing. Considered a lean cut (clean, fat free and without nerves) for its small amount of marble and boneless. It is a national product. Get it in Amazon for the small price of $ 300";
    } catch {
      try {
        document.getElementById("arrachera").textContent =
          "The arrachera is a cut of beef, of Mexican origin, named in Mexico and known by other names in many countries. It comes from the animal's diaphragm, a muscle that separates the lungs from the stomach. It is a meat full of nerves so in its natural state, it is very hard, so processes have been designed to make it more edible and tasty. One of the processes is called 'tenderization,' which means cutting the ligaments or nerves that support the weight of the viscera of the beef. By doing this, the meat becomes more chewy, since the nerves are very firm; Another process is the 'marinade' consisting of dressing the meat with certain spices and ingredients such as vinegar that make it softer and at the same time with better flavor. For only $ 250 you can get this delicious dish.";
      } catch {
        document.getElementById("inicio").textContent =
          "The authentic Brazilian flavor with more than 15 years of experience andpioneers in Morelia. Founded by Brazilians with Brazilian own recipes and which gave rise to this concept of Brazilian swords in the city of Morelia The Amazonia Restaurant offers more than a dozen meats a lagrilled, roasted and seasoned to perfection. Authentic snacksBrazilians, salads and exquisite desserts, all made at the moment, make Make your stay an unforgettable dining experience! We put your  available a variety of different fresh salads, ourwaiters will arrive at your table carrying a variety of meatsserving you our delicious cuts in the amount you want and thetimes you want The meat we use every day is the best Quality and always fresh. The time between the grill to yourdish is not longer than one minute so food is always guaranteed Fresh and ready.";
      }
    }
  }
  document.getElementsByTagName("button")[0].textContent = "Normal Mode";
  document.getElementsByTagName("button")[1].textContent = "Dark Mode";
  document.getElementsByTagName("button")[2].textContent = "Map";
  document.getElementsByTagName("button")[3].textContent = "English";
  document.getElementsByTagName("button")[4].textContent = "Spanish";
  document.getElementsByTagName("button")[5].textContent = "Offer 1";
  document.getElementsByTagName("button")[6].textContent = "Offer 2";
  document.getElementsByTagName("button")[7].textContent = "Offer 3";
}
function mapa() {
  document.getElementById("cuerpo").innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1878.355691354773!2d-101.18959300000002!3d19.682315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbddb6031da9e624b!2sRestaurante%20Amazonia!5e0!3m2!1sen!2smx!4v1581124204926!5m2!1sen!2smx" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
}
function oferta_1() {
  document.getElementById("cuerpo").innerHTML =
    ' <div id="Promocion"> <img id="im" src="pollo.jpg" height="300" width="300" /> <p id = "pollo">Deliciosa espada de pollo, marinada con la mejor receta que pudo haberexisitido llena de sabor y alegria para el estomago por solo $250 pesos el buffet por persona puedes disfrutar de este manjar.</p> </div>';
  idioma ? esp() : ing();
}
function oferta_2() {
  document.getElementById("cuerpo").innerHTML =
    ' <div id="Promocion"> <img id="im" src="arrachera.jpg" height="300" width="300" /> <p id = "arrachera">La arrachera es un corte de carne de res, de origen mexicano, llamado así en México y conocido con otros nombres en muchos países. Proviene del diafragma del animal, un músculo que separa los pulmones del estómago. Es una carne llena de nervios por lo que en su estado natural, es muy dura, por lo que se han diseñado procesos para hacerla más comestible y sabrosa. Uno de los procesos se llama «tenderizacion», que significa cortar los ligamentos o nervios que soportan el peso de las vísceras de la res. Al hacer esto, la carne se vuelve más masticable, ya que los nervios son muy firmes; otro proceso es el "marinado" consistente en aderezar la carne con ciertas especias e ingredientes como el vinagre que la vuelven más suave y a la vez con mejor sabor. Por solo $250 puedes obtener este rico platillo.</p> </div>';
  idioma ? esp() : ing();
}
function oferta_3() {
  document.getElementById("cuerpo").innerHTML =
    ' <div id="Promocion"> <img id="im" src="sirloin.png" height="300" width="300" /> <p id = "sirloin">Es conocido por ser un corte de carne fino y por su segundo nombre "Churrasco", tiene una forma ovalada y es de grandes dimensiones en comparación de los demás debido a que se moldea la pieza con película plástica para su congelación.Considerado un corte magro (limpio, sin grasa y sin nervios) por su poca cantidad de marmoleo y sin hueso. Es un producto nacional. Obtenlo en amazonia por el modico precio de $300</p> </div>';
  idioma ? esp() : ing();
}
