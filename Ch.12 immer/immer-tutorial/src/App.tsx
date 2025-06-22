import { produce } from 'immer';
import React, { useCallback, useRef, useState } from 'react';

interface IInfo {
  id: number,
  name: string,
  username: string
}
interface IData {
  array: Array<IInfo>,
  uselessValue: boolean | null
}

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState<IData>({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback((e: any) => {
    const {name, value} = e.target;
    const func = produce((draft: any) => {
      draft[name] = value;
    });
    /**
     * useState 의 함수는 값이 들어갈 수도 있지만,
     * 함수형 업데이트? 형태가 들어가도 실행시킨 후, 반환값을 가져고 가는가?
     * */  



    // const new3 = func(data);
    // console.log(new3);
    // setForm({
    //   ...form,
    //   [name]: [value]
    // })
    setForm((form: any) => {
      return {
        ...form,
        [name]: [value]
      }
    })
    // setForm(func);
    // setForm(
    //   produce((draft: any) => {
    //     draft[name] = value;
    //   })
    // );
  }, []);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    }

    setData(
      produce((draft: any) => {
        draft.array.push(info);
      })
    );

    setForm({name: '', username: ''});
    nextId.current += 1;
  }, [form.name, form.username]);

  const onRemove = useCallback((id: number) => {
    /**
     * splice(index, count)
     * 해당 Index 부터 뒤의 요소들로만 구성된 배열을 반환
     * count 가 있는 경우, 해당 index 부터 count 수 만큼 반환
     * splice 가 동작한 후, 원본에 반환된 항목들이 빠짐
     */
    setData(
      produce((draft: any) => {
        draft.array.splice(draft.array.findIndex((info: IInfo) => info.id === id), 1);
      })
    );
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder='ID'
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder='Name'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        <ul>
          {data.array.map((info: IInfo) => {
            return <li key={info.id} onClick={() => {onRemove(info.id)}}>
              {info.username} ({info.name})
            </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default App;