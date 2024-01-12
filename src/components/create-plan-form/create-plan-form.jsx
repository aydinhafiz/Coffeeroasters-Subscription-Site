import React, { useEffect, useState } from "react";
import SCreatePlanForm from "./create-plan-form.style";
import FormSideBar from "./form-plan-form/form-side-bar";
import DecisionPanel from "./decision-panel/decision-panel";

function CreatePlanForm() {
  const [createPlanState, setCreatePlanState] = useState([
    {
      id: 1,
      sectionName: "Preferences",
      title: "How do you drink your coffee?",
      options: [
        {
          id: 1,
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 3,
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: 2,
      sectionName: "Bean Type",
      title: "What type of coffee?",
      options: [
        {
          id: 1,
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 2,
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 3,
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: 3,
      sectionName: "Quantity",
      title: "How much would you like?",
      options: [
        {
          id: 1,
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: 2,
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: 3,
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: 4,
      sectionName: "Grind Option",
      title: "Want us to grind them?",
      options: [
        {
          id: 1,
          title: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 3,
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: 5,
      sectionName: "Deliveries",
      title: "How often should we deliver?",
      options: [
        {
          id: 1,
          title: "Every week",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: 2,
          title: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: 3,
          title: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ]);

  useEffect(function () {
    const createPlanState = JSON.parse(localStorage.getItem("createPlanState"));
    if (createPlanState) {
      setCreatePlanState(createPlanState);
    }
  }, []);

  function toggleQuestionAcc(questionId) {
    const newState = createPlanState.find(
      (question) => question.id === questionId
    );
    newState.open = !newState.open;
    setCreatePlanState([...createPlanState]);
    localStorage.setItem(
      "createPlanState",
      JSON.stringify([...createPlanState])
    );
  }

  function chooseAnswer(questionId, answerId) {
    createPlanState.forEach((question) => {
      if (question.id === questionId) {
        question.options.forEach((option) => {
          option.clicked = option.id === answerId;
        });
      }
    });
    localStorage.setItem(
      "createPlanState",
      JSON.stringify([...createPlanState])
    );
    setCreatePlanState([...createPlanState]);
  }

  
  return (
    <SCreatePlanForm>
      <FormSideBar
        sectionNames={createPlanState.map(function (sectionName) {
          return sectionName.sectionName;
        })}
        createPlanState={createPlanState}
      />
      <DecisionPanel
        toggleQuestionAcc={toggleQuestionAcc}
        questionsData={createPlanState}
        chooseAnswer={chooseAnswer}
      />
    </SCreatePlanForm>
  );
}

export default CreatePlanForm;
