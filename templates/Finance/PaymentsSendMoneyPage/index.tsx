import { useState } from "react";
import Layout from "@/components/Layout";
import Select from "@/components/Select";
import Field from "@/components/Field";

const recipients = [
    {
        id: "0",
        title: "Rustem Tolstobrov",
    },
    {
        id: "1",
        title: "Evelyn Allen",
    },
    {
        id: "2",
        title: "Emmy Elsner",
    },
];

const list = [
    {
        title: "Conversion fee",
        value: "9.50 USD",
    },
    {
        title: "Transfer fee",
        value: "5.50 USD",
    },
];

const PaymentsSendMoneyPage = () => {
    const [recipient, setRecipient] = useState<any>(recipients[0]);
    const [account, setAccount] = useState<string>("Debit Card **** 7890");
    const [currency, setCurrency] = useState<string>("1,290.00");
    const [time, setTime] = useState<string>("Standard Transfer 1-3 days");

    return (
        <Layout title="Send Money" back dashboard={true}>
            <form
                className="max-w-[30.625rem] w-full mx-auto py-4"
                action=""
                onSubmit={() => console.log("Submit")}
            >
                <Select
                    className="mb-5"
                    label="Select recipient"
                    items={recipients}
                    value={recipient}
                    onChange={setRecipient}
                />
                <Field
                    className="mb-5"
                    label="Select payment account"
                    placeholder="Enter account"
                    image="/images/master-card.svg"
                    value={account}
                    onChange={(e: any) => setAccount(e.target.value)}
                    required
                />
                <Field
                    className="mb-5"
                    label="You will send"
                    placeholder="Enter number"
                    currency="USD"
                    value={currency}
                    onChange={(e: any) => setCurrency(e.target.value)}
                    required
                />
                <div className="mb-5 border-l border-n-1 py-3.5 dark:border-white">
                    {list.map((item, index) => (
                        <div
                            className="flex items-center mb-3.5 text-xs last:mb-0"
                            key={index}
                        >
                            <div className="w-4 h-0.25 bg-n-1 dark:bg-white"></div>
                            <div className="w-2.5 h-2.5 mr-3.5 rounded-full bg-n-1 dark:bg-white"></div>
                            <div className="min-w-[5.25rem] mr-2.5 font-medium text-n-3 dark:text-white/50">
                                {item.title}
                            </div>
                            <div className="font-bold">{item.value}</div>
                        </div>
                    ))}
                </div>
                <Field
                    className="mb-5"
                    classInput="bg-transparent"
                    label="Delivery time"
                    placeholder="Enter time"
                    value={time}
                    onChange={(e: any) => setTime(e.target.value)}
                    required
                />
                <div className="mb-15 text-xs md:mb-8">
                    Transfers made on weekends or holidays take longer. All
                    transfers are subject to review and could be delayed or
                    stopped if we identify an issue.
                </div>
                <div className="flex justify-between md:block">
                    <button className="btn-stroke min-w-[11.25rem] md:min-w-full md:mb-3">
                        Cancel
                    </button>
                    <button className="btn-purple btn-shadow min-w-[11.25rem] md:min-w-full">
                        Continue
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default PaymentsSendMoneyPage;
