import '@ui5/webcomponents-icons/dist/icons/action';
import '@ui5/webcomponents-icons/dist/icons/full-screen';
import '@ui5/webcomponents-icons/dist/icons/exit-full-screen';
import '@ui5/webcomponents-icons/dist/icons/decline';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { DynamicPageTitle } from '@ui5/webcomponents-react/lib/DynamicPageTitle';
import { DynamicPage } from '@ui5/webcomponents-react/lib/DynamicPage';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { DynamicPageHeader } from '@ui5/webcomponents-react/lib/DynamicPageHeader';
import { DynamicPageContentArea } from '@ui5/webcomponents-react/lib/DynamicPageContentArea';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';

export default {
  title: 'Components / DynamicPage',
  component: DynamicPage,
  parameters: {
    subcomponents: { DynamicPageTitle }
  }
};

export const defaultStory = (props) => {
  return (
    <DynamicPage
      title={
        <DynamicPageTitle
          actions={[
            <Button design={ButtonDesign.Emphasized}>Edit</Button>,
            <Button design={ButtonDesign.Transparent}>Delete</Button>,
            <Button design={ButtonDesign.Transparent}>Copy</Button>,
            <Button design={ButtonDesign.Transparent}>Toggle Footer</Button>,
            <Button icon="action" design={ButtonDesign.Transparent}></Button>
          ]}
          navigationActions={[
            <Button icon="full-screen" design={ButtonDesign.Transparent} />,
            <Button icon="exit-full-screen" design={ButtonDesign.Transparent} />,
            <Button icon="decline" design={ButtonDesign.Transparent} />
          ]}
          breadcrumbs={
            <Breadcrumbs>
              <Link>Home</Link>
              <Link>Page 1</Link>
              <Link>Page 2</Link>
              <Link>Page 3</Link>
              <Link>Page 4</Link>
              <Link>Page 5</Link>
            </Breadcrumbs>
          }
          heading={<Title>Header Title</Title>}
          subHeading={<Label>This is a subheading</Label>}
        >
          <Badge>Status: OK</Badge>
        </DynamicPageTitle>
      }
      header={
        <DynamicPageHeader
          headerContent={
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label>Location: Warehouse A</Label>
                <Label>Halway: 23L</Label>
                <Label>Rack: 34</Label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
                <Label>Availability:</Label>
                <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
              </div>
            </>
          }
        />
      }
      contentArea={
        <DynamicPageContentArea title={'Base data'}>
          <Form style={{ paddingBottom: '2rem', zIndex: 0 }} columnsXL={4} columnsL={4}>
            <FormGroup title="Phone Numbers">
              <FormItem label="Home">
                <Text>+1 234-567-8901</Text>
              </FormItem>
              <FormItem label="">
                <Text>+1 234-567-5555</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>/DeniseSmith</Text>
              </FormItem>
              <FormItem label="Twitter">
                <Text>@DeniseSmith</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Addresses">
              <FormItem label="Home Address">
                <Text>2096 Mission Street</Text>
              </FormItem>
              <FormItem label="Mailing Address">
                <Text>PO Box 32114</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Mailing Address">
              <FormItem label="Work">
                <Text>DeniseSmith@sap.com</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Phone Numbers">
              <FormItem label="Home">
                <Text>+1 234-567-8901</Text>
              </FormItem>
              <FormItem label="">
                <Text>+1 234-567-5555</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>/DeniseSmith</Text>
              </FormItem>
              <FormItem label="Twitter">
                <Text>@DeniseSmith</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Addresses">
              <FormItem label="Home Address">
                <Text>2096 Mission Street</Text>
              </FormItem>
              <FormItem label="Mailing Address">
                <Text>PO Box 32114</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Mailing Address">
              <FormItem label="Work">
                <Text>DeniseSmith@sap.com</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem', zIndex: 0 }} columnsXL={4} columnsL={4}>
            <FormGroup title="Phone Numbers">
              <FormItem label="Home">
                <Text>+1 234-567-8901</Text>
              </FormItem>
              <FormItem label="">
                <Text>+1 234-567-5555</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>/DeniseSmith</Text>
              </FormItem>
              <FormItem label="Twitter">
                <Text>@DeniseSmith</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Addresses">
              <FormItem label="Home Address">
                <Text>2096 Mission Street</Text>
              </FormItem>
              <FormItem label="Mailing Address">
                <Text>PO Box 32114</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Mailing Address">
              <FormItem label="Work">
                <Text>DeniseSmith@sap.com</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Phone Numbers">
              <FormItem label="Home">
                <Text>+1 234-567-8901</Text>
              </FormItem>
              <FormItem label="">
                <Text>+1 234-567-5555</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>/DeniseSmith</Text>
              </FormItem>
              <FormItem label="Twitter">
                <Text>@DeniseSmith</Text>
              </FormItem>
            </FormGroup>
          </Form>
          <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
            <FormGroup title="Addresses">
              <FormItem label="Home Address">
                <Text>2096 Mission Street</Text>
              </FormItem>
              <FormItem label="Mailing Address">
                <Text>PO Box 32114</Text>
              </FormItem>
            </FormGroup>
            <FormGroup title="Mailing Address">
              <FormItem label="Work">
                <Text>DeniseSmith@sap.com</Text>
              </FormItem>
            </FormGroup>
          </Form>
        </DynamicPageContentArea>
      }
    />
  );
};