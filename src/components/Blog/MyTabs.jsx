import { Tabs, TabList, TabPanels, Tab, TabPanel,Button } from "@chakra-ui/react";
import Email from "./TabItems/Email";
import Infrastructure from "./TabItems/Infrastructure";
import Mailtrap from "./TabItems/Mailtrap";
import Marketing from "./TabItems/Marketing";
import Security from "./TabItems/Security";
import Testing from "./TabItems/Testing";

export default function MyTabs() {
  return (
    <>
      <div style={{ width: "88%", margin: "auto" }}>
        <Tabs is>
          <TabList color="gray">
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              Email Infrastructure
            </Tab>
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              Email Security
            </Tab>
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              Email Testing
            </Tab>
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              HTML Email
            </Tab>
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              Email Marketing
            </Tab>
            <Tab
              _selected={{
                color: "#202c45",
                borderBottom: "4px solid",
                borderColor: "whatsapp.400",
              }}
              fontWeight="700"
            >
              Mailtrap
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Infrastructure />
            </TabPanel>
            <TabPanel>
              <Security/>
            </TabPanel>
            <TabPanel>
              <Testing/>
            </TabPanel>
            <TabPanel>
              <Email/>
            </TabPanel>
            <TabPanel>
              <Marketing/>
            </TabPanel>
            <TabPanel>
              <Mailtrap/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button position="none" marginLeft="43%" variant="outline">
          Load More Posts
        </Button>
      </div>
    </>
  );
}
