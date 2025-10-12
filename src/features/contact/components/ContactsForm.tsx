import axios from 'axios';
import { memo, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import ReusableDropdown from '../../../layout/components/reuseable-dropdown/ReusableDropdown';
import toast from 'react-hot-toast';


const ContactsForm = () => {
    const { t } = useTranslation()
    const handleReset = () => {
    setFullName("");
    setNumber("");
    setSquare("");
    setAddress("");
    setType("");
    }
    const [fullName, setFullName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [square, setSquare] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [type, setType] =  useState<string>('')
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const msg = {
            fullName,
            number,
            square,
            address,
            type
        }
        
        try {
               axios.get(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`, {
        params: {
        chat_id: import.meta.env.VITE_CHAT_ID,
        text: `
<b>New Order</b>

Name: <b>${msg.fullName}</b>
Phone: <b>${msg.number}</b>
Address: <b>${msg.address}</b>
Square: <b>${msg.square}</b>
Type: <b>${msg.type}</b>
    `,
    parse_mode: "HTML",
  },
});
  toast.success(t("contactComp.successMsg"));
      handleReset();
        } catch (error) {
           toast.error(t("contactComp.errorMsg"));
        }


  
 handleReset()
    }
    const typeOptions = [
    { label: t("contactComp.select.exterior"), value: "exterior" },
    { label: t("contactComp.select.interior"), value: "interior" },
    { label: t("contactComp.select.both"), value: "both" },
  ];
  return (
    <section className='py-[50px] w-full'>
      <div className="container grid grid-cols-2 max-[650px]:grid-cols-1">
        <div className='flex flex-col gap-3.5 max-[650px]:pl-2.5'>
            <h3 className='uppercase text-2xl font-light'>Nova</h3>
            <h2 className='text-3xl'>
                {t("contactComp.desc")}
            </h2>
            <p className='max-w-[300px] text-lg'>
                
                {t("contactComp.subdesc")}
            </p>
        </div>
        <form className='bg-white p-5 rounded-[10px] shadow-md flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
            <label htmlFor="fullName">
                {t("contactsForm.name")}:
            </label>
            <input 
            required
            onChange={(e) => setFullName(e.target.value) }
            id='fullName'
            className='py-[8px] indent-3 focus:border-b-blue-500 border-b-[1px] border-b-slate-300 outline-none text-[18px]'
            value={fullName}  type="text" />

            </div>

            <div className='flex flex-col'>

            <label htmlFor="number">
                {t("contactsForm.number")}:
            </label>
            <input 
            required
            onChange={(e) => setNumber(e.target.value) }
            id='number'
            className='py-[8px] indent-3 focus:border-b-blue-500 border-b-[1px] border-b-slate-300 outline-none text-[18px]'
            value={number}  type="text" />
            </div>

            <div className='flex flex-col'>

            <label htmlFor="address">
                    {t("contactsForm.address")}:
            </label>
            <input 
            required
            onChange={(e) => setAddress(e.target.value) }
            id='address'
            className='py-[8px] indent-3 focus:border-b-blue-500 border-b-[1px] border-b-slate-300 outline-none text-[18px]'
            value={address}  type="text" />
            </div>

            <div className='flex flex-col'>
                {t("contactsForm.square")}:
            <label  htmlFor="square">

                </label>
            <input 
            required
            onChange={(e) => setSquare(e.target.value) }
            id='square'
            className='py-[8px] indent-3 focus:border-b-blue-500 border-b-[1px] border-b-slate-300 outline-none text-[18px]'
            value={square}  type="text" />
            </div>

            <div className="flex flex-col">
            <label>{t("contactsForm.type")}:</label>
            <ReusableDropdown
              label="Type"
              options={typeOptions}
              selected={typeOptions.find((opt) => opt.value === type)?.value ?? null}
              onSelect={(value) => setType(value as string)}
              allLabel={t("contactComp.select.selectType")}
            />
          </div>
            <div>
            <button className='border py-2 px-5 duration-200 hover:cursor-pointer hover:bg-black hover:text-white'>{t("contactComp.submit")}</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactsForm);