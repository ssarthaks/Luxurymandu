import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import fonepay from "../assets/fonepay.jpg"
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

// Function to handle "Add to Cart" action
const handleCheckout = () => {
  toast({
    title: "Checkedout Successfully",
    description: `Thankyou for buying food from us!`,
    variant: "default", 
  });
  navigate("/");
};

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid gap-8">
            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Sarthak" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="sarthaksharma@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+977-98XXXXXXXX" />
                </div>
              </div>
            </motion.section>

            {/* Delivery Address */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="Thamel" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Kathmandu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" placeholder="44600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryInstructions">
                    Delivery Instructions (Optional)
                  </Label>
                  <Input
                    id="deliveryInstructions"
                    placeholder="Brief description of your location..."
                  />
                </div>
              </div>
            </motion.section>

            {/* Payment Method */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div>
                {/* Radio Group for Payment Options */}
                <RadioGroup
                  defaultValue=""
                  className="space-y-4"
                  onValueChange={(value) => setSelectedPayment(value)}
                >
                  {/* Esewa Option */}
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="esewa" id="esewa" />
                    <Label htmlFor="esewa">eSewa</Label>
                  </div>

                  {/* FonePay Option */}
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fonepay" id="fonepay" />
                    <Label htmlFor="fonepay">FonePay</Label>
                  </div>

                  {/* Cash on Delivery Option */}
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                </RadioGroup>

                {/* Conditional Inputs Based on Selected Payment Method */}
                <div className="mt-4 space-y-4">
                  {selectedPayment === "esewa" && (
                    <div className="space-y-2">
                      <Label htmlFor="esewaId">eSewa ID</Label>
                      <Input id="esewaId" placeholder="Enter your eSewa ID" />
                    </div>
                  )}

                  {selectedPayment === "fonepay" && (
                    <div className="space-y-2">
                      <Label htmlFor="fonepayId">FonePay ID</Label>
                      <img src={fonepay} alt="" className="h-[50vh] mx-auto" />
                       <p className="text-sm text-muted-foreground">
                       Scan and Pay!
                      </p>
                    </div>
                  )}

                  {selectedPayment === "cash" && (
                    <div>
                      <p className="text-sm text-muted-foreground">
                        You can pay in cash when your order is delivered.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>

            {/* Order Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$129.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (13%)</span>
                  <span>$16.90</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$5.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$151.87</span>
                  </div>
                </div>
              </div>
            </motion.section>

            <Button size="lg" className="w-full" onClick={() => handleCheckout()}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default Checkout;
