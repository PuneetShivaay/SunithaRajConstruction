import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative grid min-h-[80svh] place-items-center overflow-hidden pt-24">
        <div className="grid-bg absolute inset-0 opacity-20" />
        <Container className="relative text-center">
          <p className="outline-text font-display text-[clamp(120px,24vw,320px)] font-semibold leading-none">404</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">This page is still under construction.</h1>
          <p className="mx-auto mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
