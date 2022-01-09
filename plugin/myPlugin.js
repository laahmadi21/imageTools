function myPlugin(settings) {

     let targets = null;
     let targetsButton = null;



     targets = document.querySelector('.' + settings.elementClass);
     targetsButton = settings.buttons;


     let makeButton = function (button) {

          return '<button type="button" class="style-button"  ' + (button.bgColor ? "style = 'background-color:" + button.bgColor + "'" : "") + ' title=' + button.name + ">" + (button.title ? button.title : "") + (button.icon ? '<img  src="./plugin/image/' + button.icon + '.png"  />' : "") + '</button>'

     }

     let addButton = function (item, buttons) {

          let element = document.createElement("div");
          element.classList.add("parents-button");
          element.classList.add("important");
          item.appendChild(element);

          let htmlButtonElement = ""
          for (let btn of buttons) {
               htmlButtonElement += btn
          }

          element.innerHTML = htmlButtonElement
     }

     const checkingHasClassAndAddingButton = () => {
          let buttons = [];
          for (let button of targetsButton) {
               buttons.push(makeButton(button));
          }
          addButton(targets, buttons);
     }


     if (settings && settings.elementClass) {
          checkingHasClassAndAddingButton();
     }




     let rotate = 0;
     let width = targets.querySelector(".my_image");
     width = width.width;
     let height = targets.querySelector(".my_image");
     height = height.height;
     let imgElement = null;
     let myImage = targets.querySelector('.my_image');



     if (settings && settings.buttons) {

          let styleButton = targets.querySelectorAll('.style-button');

          styleButton.forEach(function (i) {
               i.addEventListener('click', function (event) {
                    changeImage(event.target.title)
               });
          });
     }

     let xCursor = 0,
          yCursor = 0,
          xImgElement = 0,
          yImgElement = 0;

     myImage.addEventListener('mousedown', function (event) {
          imgElement = this;
          imgElement = this;
          xImgElement = event.clientX - myImage.offsetLeft;
          yImgElement = event.clientY - myImage.offsetTop;


     });

     targets.addEventListener('mousemove', function (event) {
          if (imgElement !== null) {

                xCursor = event.clientX;
                yCursor = event.clientY;
               if (imgElement !== null) {
                    imgElement.style.left = (xCursor - xImgElement) + 'px';
                    imgElement.style.top = (yCursor - yImgElement) + 'px';

               }

          }

     });

     targets.addEventListener('mouseup', function () {
          imgElement = null;
     });


    const  addStyleForImage = (width,height,rotate) => {

     targets.querySelector(".my_image").style.cssText = `position: absolute;transform: rotate(${rotate}deg); width: ${width}px; height : ${height}px ;top : 0 ; left: 0 ;`


    }






     const zoomingIn = function () {
 
          if (width == 700) {
               return width = 700;
          };
          width += 50;
          height += 50;

          addStyleForImage(width, height, rotate);
        
     }


     const zoomingOut = function () {

          if (width == 100) {
               return width = 100;
          };
          width -= 50;
          height -= 50;
           addStyleForImage(width, height, rotate);
     }

     const rotateLeft = function () {

          rotate += 30;
          addStyleForImage(width, height, rotate);
     }

     const rotateRight = function () {

          rotate -= 30;
          addStyleForImage(width, height, rotate);
          
     }

     const reaset = function () {

          width = 400;
          height = 400;
          rotate = 0;
          targets.querySelector(".my_image").classList.remove('transform');
          addStyleForImage(width, height, rotate);
          rotate = 0;
     }



     const changeImage = function (textButton) {

          switch (textButton) {
               case 'ZoomIn':
                    zoomingIn();
                    break;
               case 'ZoomOut':
                    zoomingOut();
                    break;
               case 'Reset':
                    reaset()
                    break;
               case 'RotateLeft':
                    rotateLeft();
                    break;
               case 'RotateRight':
                    rotateRight()
                    break;
          }
     }
}



