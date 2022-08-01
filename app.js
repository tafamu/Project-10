const k_alti=document.getElementById("kahvalti");
const tatli=document.getElementById("tatli");
const icecek=document.getElementById("icecek");
const yemek=document.getElementById("yemek");
const container=document.querySelector(".container");
const kahvalti_menu=document.querySelector(".kahvalti_menu");
const icecek_menu=document.querySelector(".icecek_menu");
const tatli_menu=document.querySelector(".tatli_menu");
const yemek_menu=document.querySelector(".yemek_menu");

window.addEventListener("load",function(){
    k_alti.click();
});

k_alti.addEventListener("click",function(){
    icecek_menu.style.visibility ="hidden";
    tatli_menu.style.visibility ="hidden";
    yemek_menu.style.visibility ="hidden";
    kahvalti_menu.style.visibility ="visible";
});
icecek.addEventListener("click",function(){
    kahvalti_menu.style.visibility ="hidden";
    tatli_menu.style.visibility ="hidden";
    yemek_menu.style.visibility ="hidden";
    icecek_menu.style.visibility ="visible";
});
tatli.addEventListener("click",function(){
    kahvalti_menu.style.visibility ="hidden";
    icecek_menu.style.visibility ="hidden";
    yemek_menu.style.visibility ="hidden";
    tatli_menu.style.visibility ="visible";
});
yemek.addEventListener("click",function(){
    kahvalti_menu.style.visibility ="hidden";
    icecek_menu.style.visibility ="hidden";
    tatli_menu.style.visibility ="hidden";
    yemek_menu.style.visibility ="visible";
})