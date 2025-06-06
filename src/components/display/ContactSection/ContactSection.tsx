import useContactStore from '@store/useContactStore';
import { useOptionalFeatureStore } from '@/store/OptionalFeature/useOptionalFeatureStore';
import ContactItem from './ContactItem';
import SectionTitle from '@/components/common/SectionTitle';

const ContactSection = () => {
  const { selectedOptionalFeatures } = useOptionalFeatureStore();
  const contacts = useContactStore((state) => state.contacts);

  const isContactFeatureActive = selectedOptionalFeatures.contact;

  return (
    isContactFeatureActive && (
      <div className="column-center gap-6 py-20 ">
        <SectionTitle
          subTitle="CONTACT"
          title="연락하기"
          information={<>직접 축하의 마음을 전해보세요</>}
        />

        {contacts.map((value, index) => {
          const { role, contact, fatherContact, motherContact } = value;

          return (
            <div
              key={index}
              className={`flex-center gap-12 text-sm py-14 px-10 rounded-lg ${role === '신랑' ? 'bg-sky-50/40' : 'bg-pink-50/40'}`}
            >
              {contact && (
                <div className="font-medium">
                  <ContactItem
                    title={`${role}에게 연락하기`}
                    phoneNumber={contact}
                    role={role}
                  />
                </div>
              )}

              {(fatherContact || motherContact) && (
                <div className="contact-group text-gray-500">
                  {fatherContact && (
                    <ContactItem
                      title={`${role} 아버지`}
                      phoneNumber={fatherContact}
                      role={role}
                    />
                  )}
                  {motherContact && (
                    <ContactItem
                      title={`${role} 어머니`}
                      phoneNumber={motherContact}
                      role={role}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default ContactSection;
