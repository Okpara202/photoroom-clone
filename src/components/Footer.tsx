import { ColumnList } from "./footer/ColumnList";
import { AppButtons } from "./footer/AppButtons";
import { FooterBottom } from "./footer/FooterBottom";
import {
  tools,
  useCases,
  productPhoto,
  industries,
  automation,
  company,
  plans,
} from "./footer/footer-data";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-page mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 lg:pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <ColumnList title="Tools" links={tools} />
          </div>

          <div className="space-y-10">
            <ColumnList title="Use cases" links={useCases} />
            <ColumnList title="Product photography" links={productPhoto} />
          </div>

          <div className="space-y-10">
            <ColumnList title="Industries" links={industries} />
            <ColumnList title="Automation" links={automation} />
          </div>

          <div className="space-y-10">
            <ColumnList title="Company" links={company} />
            <ColumnList title="Plans" links={plans} />
          </div>

          <div>
            <h4 className="text-[14px] font-semibold text-neutral-900 mb-4">
              Explore our apps
            </h4>
            <AppButtons />
          </div>
        </div>

        <div className="h-[20vh]" />

        <FooterBottom />
      </div>
    </footer>
  );
}
