function myFunction() {
   
const container = document.createElement('div');
container.className = 'container'
for (let i1 = 1, numberClass1 = 0; i1 <= 2; i1++) {
   var elements = document.createElement('div')
   container.append(elements)
   elements.classList.add(`containerChild${numberClass1+=1}`)
   if (container.children.length == 2) {
      for (let i2 = 1, numberClass2 = 0; i2 <= 1; i2++) {
         var lastElementChild = document.createElement('div')
         container.children[1].append(lastElementChild)
         lastElementChild.classList.add(`lastElementChild${numberClass2+=1}`)
      }
   }
}
const elem1 = document.getElementsByClassName('containerChild1')[0]
const elem2 = document.getElementsByClassName('containerChild2')[0]
const elem2child1 = document.getElementsByClassName('lastElementChild1')[0]
elem1.innerHTML = 'text element 1'
elem2.innerHTML = 'text element 2'
elem2child1.innerHTML = 'text child element 2 '

document.body.append(container)
}