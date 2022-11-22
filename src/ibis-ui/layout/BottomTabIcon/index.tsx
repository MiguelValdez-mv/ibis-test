import { component$, Slot } from "@builder.io/qwik";

import { Col } from "@/ibis-ui/layout/Col";
import { Row } from "@/ibis-ui/layout/Row";
import { Link } from "@/ibis-ui/atoms/Link";
import { Text } from "@/ibis-ui/atoms/Text";

export const BottomTabIcon = component$((props: any) => {
  return (
    <>
      {props.horizontal ? (
        <Row className="items-center justify-center">
          <Slot />
          {props.title && (
            <Text className="pl-2" tiny>
              {props.title}
            </Text>
          )}
        </Row>
      ) : (
        <Link to={props.to}>
          <Col className="items-center justify-center p-3">
            <Slot />
            {props.title && (
              <Text className="pt-0.5" tiny primary={props.active}>
                {props.title}
              </Text>
            )}
          </Col>
        </Link>
      )}
    </>
  );
});
