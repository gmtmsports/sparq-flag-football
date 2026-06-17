import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sparq-icon-green.png" alt="" className="h-9 w-9" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sparq-wordmark-green.png" alt="SPARQ" className="h-6 w-auto" />
          <span className="ml-1 text-xs text-white/40">Powered by GMTM</span>
        </div>
        <p className="text-center text-xs text-white/40 sm:text-right">
          SPARQ™ is a trademark of GMTM. The Standard for Athletic Performance.
          <br className="hidden sm:block" />
          &copy; {new Date().getFullYear()} GMTM. In partnership with USA Football.
        </p>
      </Container>
    </footer>
  );
}
