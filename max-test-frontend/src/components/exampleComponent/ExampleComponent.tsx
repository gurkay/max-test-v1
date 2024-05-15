import './ExampleComponent.css';
import TabButton from "../tabButtonComponent/TabButtonComponent";
import { tabButtonData } from "../../data/tabButtonData";
import { useState } from "react";

const ExampleComponent = () => {
    const [tabContent, setTabContent] = useState<string>();

    function handleClick(value: string) {
        setTabContent(value);
    }
    return (
        <>
            <menu>
                <TabButton label="Tab Button 1" isSelected={tabContent === 'tab1'} onClick={() => handleClick('tab1')} />
                <TabButton label="Tab Button 2" isSelected={tabContent === 'tab2'} onClick={() => handleClick('tab2')} />
                <TabButton label="Tab Button 3" isSelected={tabContent === 'tab3'} onClick={() => handleClick('tab3')} />
                <TabButton label="Tab Button 4" isSelected={tabContent === 'tab4'} onClick={() => handleClick('tab4')} />
            </menu>
            {!tabContent
                ? (<p>Please select a topic.</p>)
                : (
                    <div id='tab-content'>
                        <h3>{tabButtonData[tabContent].title}</h3>
                        <p>{tabButtonData[tabContent].description}</p>
                        <pre>
                            <code>
                                {tabButtonData[tabContent].code}
                            </code>
                        </pre>
                    </div>
                )
            }
        </>
    );
}

export default ExampleComponent;