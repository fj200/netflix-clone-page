const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
tabItems.forEach(items=>items.addEventListener("click",selectItem));
function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    console.log(this.id);
    const tabContentItem = $(`#${this.id}-content`);
    tabContentItem.addClass("show");
 }
function removeBorder(){
   tabItems.forEach(items=>items.classList.remove("tab-border")) ;
   
}
function removeShow(){
    tabContentItems.forEach(items=>items.classList.remove("show")) ;

}
//console.log(tabContentItems)