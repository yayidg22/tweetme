import { StyledButton } from "@/styles/Global";
import { BodyContainer, Container, Footer } from "@/styles/applayout.module";

export default function AppLayout({ children }: any) {

  return (
    <Container>
      <BodyContainer>
        <main>{children}</main>
      </BodyContainer>
      <Footer>
        <h1>
          FOOTER
        </h1>
        <StyledButton id="signout" /* onClick={() => signOut()} */>Sign out</StyledButton>
      </Footer>
    </Container>
  )
}