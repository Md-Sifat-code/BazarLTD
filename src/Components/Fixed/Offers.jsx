import React from "react";

function Offers() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl flex flex-row justify-between items-center gap-6">
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src="/SVG1.png" alt="" />
          </div>
          <div className="lex flex-col items-center gap-1 text-sm ">
            <h1 className="font-bold">Payment only online</h1>
            <p className="text-gray-700">
              Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src="/SVG2.png" alt="" />
          </div>
          <div className="lex flex-col items-center gap-1 text-sm ">
            <h1 className="font-bold">New stocks and sales</h1>
            <p className="text-gray-700">
              Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src="/SVG3.png" alt="" />
          </div>
          <div className="lex flex-col items-center gap-1 text-sm ">
            <h1 className="font-bold">Quality assurance</h1>
            <p className="text-gray-700">
              Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            <img src="/SVG4.png" alt="" />
          </div>
          <div className="lex flex-col items-center gap-1 text-sm ">
            <h1 className="font-bold">Delivery from 1 hour</h1>
            <p className="text-gray-700">
              Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
