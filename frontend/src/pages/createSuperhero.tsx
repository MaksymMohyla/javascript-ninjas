import DefaultLayout from '@/layouts/default';

export default function CreateSuperhero() {
  return (
    <DefaultLayout>
      <h1>Create Superhero</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Power:
          <input type="text" name="power" />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </DefaultLayout>
  );
}
