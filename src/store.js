export const initialStore = {
  contacts: []
};

export default function contactReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };
    case "REMOVE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };
    case "SET_CONTACTS":
      return {
        ...store,
        contacts: action.payload
      };
      case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map((contact, index) =>
          index === action.payload.index ? { ...contact, ...action.payload.data } : contact
        )
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
