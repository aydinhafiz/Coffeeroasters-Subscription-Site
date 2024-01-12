import SContent from "./content.styles";
import HowItWorks from "./how-it-works/how-it-works";
import TypesOfCoffee from "./types-of-coffee/types-of-coffee";
import WhyChooseUs from "./why-choose-us/why-choose-us";

// import "/assets/home/desktop/image-gran-espresso.png"
// import "/assets/home/desktop/image-planalto.png"
// import "/assets/home/desktop/image-piccollo.png"
// import "/assets/home/desktop/image-danche.png"  icon-coffee-bean.svg

function Content() {
  return (
    <SContent>
      <TypesOfCoffee />
      <WhyChooseUs />
      <HowItWorks />
    </SContent>
  );
}

export default Content;
