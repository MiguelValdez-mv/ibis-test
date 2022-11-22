import { component$ } from "@builder.io/qwik";

import { Col } from "@/ibis-ui/layout/Col";
import { Row } from "@/ibis-ui/layout/Row";
import { Spacing } from "@/ibis-ui/layout/Spacing";
import { BottomSheet } from "@/ibis-ui/layout/BottomSheet";
import { BottomStickyBar } from "@/ibis-ui/layout/BottomStickyBar";
import { Text } from "@/ibis-ui/atoms/Text";
import { Link } from "@/ibis-ui/atoms/Link";
import { BottomTabIcon } from "@/ibis-ui/layout/BottomTabIcon";
import { MinusIcon } from "@/icons/MinusIcon";
import { DuotoneHome05Icon } from "@/icons/DuotoneHome05Icon";
import { DuotoneWallet02Icon } from "@/icons/DuotoneWallet02Icon";
import { colors } from "@/config/colors";

export const AppBottomBar = component$(({ active }: { active: string }) => {
  const isHomeActive = active === "home";
  const isAccountsActive = active === "accounts";
  return (
    <BottomStickyBar className="h-[64px] flex flex-0 px-4 py-2 border-t-2 justify-around items-center fixed bottom-0 w-full">
      <BottomTabIcon title="Inicio" to="/inicio" active={isHomeActive}>
        <DuotoneHome05Icon
          /* @ts-ignore */
          color={isHomeActive ? colors.primary : undefined}
          width={32}
          height={32}
        />
      </BottomTabIcon>

      {/*
        <BottomTabIcon>
          <BarChartSquare01Icon />
        </BottomTabIcon> */}

      <BottomSheet>
        <Col className="p-2 py-6">
          <Link to="/vender">
            <Row className="p-2 items-center">
              {/* @ts-ignore */}
              <Row className="w-[50px] h-[50px] bg-[#F2F4F7] rounded-full items-center justify-center text-[#000]">
                <MinusIcon />
              </Row>
              <Spacing left={2} />
              <Col>
                <Text small>Vender</Text>
                <Text tiny muted>
                  Vende USDT por Bolívares
                </Text>
              </Col>
            </Row>
          </Link>
        </Col>
      </BottomSheet>

      {/* <BottomTabIcon>
          <Users02Icon />
        </BottomTabIcon> */}

      <BottomTabIcon title="Cuentas" to="/cuentas" active={isAccountsActive}>
        <DuotoneWallet02Icon
          /* @ts-ignore */
          color={isAccountsActive ? colors.primary : undefined}
          width={32}
          height={32}
        />
      </BottomTabIcon>
    </BottomStickyBar>
  );
});
