canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width= 30;
block_image_height=30;
var player_image_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_image_object=Img;
        player_image_object.scaleToWidth(150);
        player_image_object.scaleToHeight(140);
        player_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image_object);
    });

}
function newimage(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });

    
}