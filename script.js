const myBtn = document.getElementsByTagName("button");
let card = document.getElementsByClassName("card");
let moreInfoCard = document.getElementsByClassName("location_card");

for (let index = 0; index < myBtn.length; index++) {
    myBtn[ index ].onclick = function () {
    // set visiblity 
        moreInfoCard[index].style.visibility = "visible";
    };
     document.getElementsByClassName("close")[index].addEventListener("click", function () {
       moreInfoCard[index].style.visibility = "hidden";
     });
    
    let text = card[ index ].querySelector("p").innerHTML;
    // console.log(text);
    let heading = document.createElement("p");
    heading.textContent = `${text}`;
    heading.style.width = "fit-content";
    // heading.style.display = "block";
    heading.style.margin = "16px auto";
    heading.style.fontWeight = "bold";
    moreInfoCard[ index ].appendChild(heading);

    let pic = card[ index ].querySelector("img");
    // console.log(pic);
    let image = document.createElement("img");
    image.setAttribute("src", `${pic.src}`);
    image.style.height = "200px";
    image.style.width = "400px";
    image.style.borderRadius = "16px";
    image.style.display = "block";
    image.style.margin = "0 auto";
    moreInfoCard[ index ].appendChild(image);

    let para = document.createElement("p");
    switch (index) {
        case 0: para.textContent =
          "At a distance of 1,474 km from Mumbai, 1,462 km from Kolkata, 1,543 km from Hyderabad, 2,171 km from Chennai, 2,131 km from Bangalore, Delhi, also known as Dilli, is officially the National Capital Territory (NCT). New Delhi, the national capital of India, is one of the nine districts of the NCT of Delhi.Historically, the city was known as Indraprastha or Hastinapura, the renowned capital of the legendary Pandavas, which has overwhelming history and rich cultural heritage. It was first created as the capital of an independent kingdom by Tomars in 736 AD.  ";
            break;
        case 1: para.textContent =
            "Jaipur is often called the Pink City in reference to its distinctly coloured buildings, which were originally painted this color to imitate the red sandstone architecture of Mughal cities. The present earthy red color originates from repainting of the buildings undertaken for a visit by the Prince of Wales in 1876.Jaipur gets its name from its founder Maharaja JaiSingh II (1693-1744) the great warrior and astronomer. He came to power at the age of 11 on the death of his father Maharaja Bishan Singh. Jai Singh’s lineage can be traced back to the Kucchwaha Rajput, clan who came to power in the 12th century.";
            break;
        case 2: para.textContent =
            "At a distance of 170 km from Pondicherry, 337 km from Bangalore, 629 km from Hyderabad, 453 km from Vijayawada, & 772 km from Trivandrum, Chennai is one of the largest cities in India and the capital city of Tamil Nadu state. It is one of the famous places to visit in Tamilnadu.At a distance of 170 km from Pondicherry, 337 km from Bangalore, 629 km from Hyderabad, 453 km from Vijayawada, & 772 km from Trivandrum, Chennai is one of the largest cities in India and the capital city of Tamil Nadu state. It is one of the famous places to visit in Tamilnadu.";
            break;
        case 3: para.textContent =
            "At a distance of 128 km from Ooty, 139 km from Bangalore, 203 km from Coimbatore, 247 km from Mangalore, & 476 km from Chennai, Mysore is the 2nd biggest city in Karnataka. It is one of the top places to visit near Bangalore, and among the must include places in Karnataka Tour Packages.Mysore is the erstwhile capital of the Mysore Maharajas, who ruled the Mysore State between 1399 & 1947. Mysore is also the stopover for Coorg Tour Packages. Mysore still retains its old-world charm with its palaces, heritage buildings, traditions, and temples. ";
            break;
    }

    para.style.textAlign = "justify";
    para.style.margin = "16px";
    para.style.marginTop = "48px";

    
    moreInfoCard[ index ].appendChild(para);
}


