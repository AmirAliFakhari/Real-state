import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";

function EditeUser() {
  const { register, handleSubmit } = useForm();
  const userEmail = localStorage.getItem("userEmail");
  const userFirstname = localStorage.getItem("userFirstname");
  const userLastname = localStorage.getItem("userLastname");
  const userPhone = localStorage.getItem("userPhone");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className=" p-5 font-bold">ویرایش اطلاعات</span>
      <div className="p-5">
        <InputForm
          key="1"
          title="نام "
          type="text"
          defaulted={userFirstname}
          name="نام "
          textholder="نام خود را وارد کنید"
          register={register("firstName", {
            required: {
              value: true,
              message: "Please complete the firstname",
            },
          })}
        />
        <InputForm
          key="2"
          title=" نام خانوادگی"
          defaulted={userLastname}
          type="text"
          name="نام خانوادگی"
          textholder=" نام خانوادگی خود را وارد کنید"
          register={register("lastName", {
            required: {
              value: true,
              message: "Please complete the lastname",
            },
          })}
        />
        <InputForm
          key="3"
          title="شماره موبایل"
          type="numbers"
          defaulted={userPhone}
          name=""
          textholder="شماره موبایل خود را وارد کنید"
          register={register("phone", {
            required: {
              value: true,
              message: "Please complete the phone",
            },
          })}
        />
        <InputForm
          key="4"
          title="ایمیل"
          type="email"
          name=""
          value={userEmail}
          textholder="ایمیل خود را وارد کنید"
          register={register("email", {
            required: {
              value: true,
              message: "Please complete the email",
            },
          })}
        />
        <InputForm
          key="5"
          title="رمز عبور"
          type="number"
          name=""
          textholder="رمز عبور را وارد کنید"
          register={register("password", {
            required: {
              value: true,
              message: "Please complete the password",
            },
          })}
        />
      </div>
      <div className="flex flex-row-reverse gap-5 pe-5">
        <button className=" rounded-md bg-red-500 p-2 text-white">
          دخیره اطلاعات
        </button>
        <button className="rounded-md border border-red-400 p-2">انصراف</button>
      </div>
    </form>
  );
}

export default EditeUser;