import { BodyContainer, Container, Footer } from "@/styles/applayout.module"

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
      </Footer>
    </Container>
  )
}