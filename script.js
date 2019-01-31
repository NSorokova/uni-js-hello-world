class Customer{
constructor(fname,sname,gender,age,role){
    this.firstName =fname;
    this.surName = sname;
    this.gender = gender;
    this.age = age;
    this.role = role;
}
}
class Event{
    constructor(name,ageFlag){
     this.id = 1;
     this.name= name;
     this.ageFlag = ageFlag;
     this.ageAccess =  this.ageFlag ? '18+' : 'Free access';
    }
}

//////

class CustomerManager{
    constructor(){
    this.customers = []
    }
}
class EventManager{
constructor(){
    this.events =  []
}    
}

const customerManager = new CustomerManager();
const eventManager = new EventManager();
 

eventManager.events.push( new Event( 'Confession in Plovdiv', true   )  )
eventManager.events.push( new Event( 'Bedroom club', true )  )
eventManager.events.push( new Event( 'Kapana fest', false  )  )
eventManager.events.push( new Event( 'Hills of Rock' , true )  )

customerManager.customers.push(new Customer( 'Pavlo','Lolo','man','19','customer'))
customerManager.customers.push(new Customer( 'Natalia','Kek','woman','18','admin'))

var eventHTML = "<div class='w3-row-padding w3-padding-64 w3-theme-l1' id='work'><div class='w3-quarter'><h2>Events in Plovdiv</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp .</p></div><div class='w3-quarter'><div class='w3-card w3-white'><img src='https://www.mebel-group.com/media/asset/image/source/149146998258e6069e17a3a7.76916356.jpg' alt='Snow' style='width:100%'><div class='w3-container'><h3>"+eventManager.events[0].name+"</h3><p>"+ eventManager.events[0].ageAccess +"</p></div></div></div>"
var eventHTML2 = "<div class='w3-row-padding w3-padding-64 w3-theme-l1' id='work'><div class='w3-quarter'><h2>Events in Plovdiv</h2><p> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class='w3-quarter'><div class='w3-card w3-white'><img src='http://pohvalno.info/wp-content/uploads/2016/01/MG_0597-1024x683-1024x683.jpg' alt='Snow' style='width:100%'><div class='w3-container'><h3>"+eventManager.events[1].name+"</h3><p>"+ eventManager.events[0].ageAccess +"</p></div></div></div>"
var eventHTML3 = "<div class='w3-row-padding w3-padding-64 w3-theme-l1' id='work'><div class='w3-quarter'><h2>Events in Plovdiv</h2><p> aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n.</p></div><div class='w3-quarter'><div class='w3-card w3-white'><img src='https://photo-forum.net/imgs_medium/2018-07/1533033745__P1010773_s.jpg' alt='Snow' style='width:100%'><div class='w3-container'><h3>"+eventManager.events[2].name+"</h3><p>"+ eventManager.events[0].ageAccess +"</p></div></div></div>"
document.getElementById('team').innerHTML += eventHTML
document.getElementById('team').innerHTML += eventHTML2
document.getElementById('team').innerHTML += eventHTML3