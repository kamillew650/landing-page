"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Droplets, Leaf, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./ui/copy-button";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">ThermoShield</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <CopyButton value="info@thermoshield.com" label="Copy email" />
          <CopyButton value="+1 (555) 123-4567" label="Copy phone number" />
        </div>
        <nav className="ml-6 hidden sm:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full content-center py-12 md:py-24 lg:py-32 xl:py-48 bg-black grid place-items-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Revolutionary Thermo Isolation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Enhance your building's energy efficiency with our
                  cutting-edge thermo isolation materials.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 grid place-items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Droplets className="w-8 h-8" />
                  <CardTitle>Moisture Barrier</CardTitle>
                </CardHeader>
                <CardContent>
                  Advanced materials that prevent moisture penetration, ensuring
                  a dry and comfortable environment.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Zap className="w-8 h-8" />
                  <CardTitle>Thermal Insulation</CardTitle>
                </CardHeader>
                <CardContent>
                  High-performance insulation that significantly reduces heat
                  transfer, lowering energy costs.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Leaf className="w-8 h-8" />
                  <CardTitle>Eco-Friendly Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  Sustainable materials that provide excellent insulation while
                  minimizing environmental impact.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 grid place-items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Shop Our Products
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              >
                Shop on Amazon
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://www.ebay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              >
                Shop on eBay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 ThermoShield. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
