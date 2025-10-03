import axios from 'axios';
import { memo, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';


const BOT_TOKEN = '8263287382:AAEeFqtE6Zp5CrFrv3fCce_eFnraRO4zJwk'

const CHAT_ID = '-1003173277714'

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
    const [type, setType] =  useState<string>('Exterior')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const msg = {
            fullName,
            number,
            square,
            address,
            type
        }
        

       axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        params: {
        chat_id: CHAT_ID,
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
 handleReset()
    }
  return (
    <section className='py-[50px] w-full'>
      <div className="container grid grid-cols-2 max-[650px]:grid-cols-1">
        <div className='flex flex-col gap-3.5 max-[650px]:pl-2.5'>
            <h3 className='uppercase text-2xl font-light'>Nova</h3>
            <h2 className='text-3xl'>
                Contact Form
            </h2>
            <p className='max-w-[300px] text-lg'>
                To answer your questions, please contact us by filling out the contact form.
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

            <div className='flex flex-col'>
                <label htmlFor="type">
                    {t("contactsForm.type")}
                </label>
                <select 
                id='type'
                required
                className='border border-gray-200 py-2'
                onChange={(e) => setType(e.target.value) }
                value={type}>
                    <option value="exterior">Exterior</option>
                    <option value="interior">Interior</option>
                    <option value="both">Both Exterior & Interior</option>
                </select>
            </div>
            <div>
            <button className='border py-2 px-5 duration-200 hover:cursor-pointer hover:bg-black hover:text-white'>Submit</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactsForm);