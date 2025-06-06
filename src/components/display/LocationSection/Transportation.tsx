import { transportationData } from '@constants/transportationData';
import { useLocationFeatureStore } from '@store/OptionalFeature/useLocationFeatureStore';
import DOMPurify from 'dompurify';

const Transportation = () => {
  const { subFeatures, transportationInputs } = useLocationFeatureStore();

  return (
    <div className="flex flex-col py-14 px-10 gap-6 bg-neutral-100 bg-opacity-50 leading-6">
      <div className="flex flex-col gap-6">
        {transportationData.map(
          ({ key, inputKey, title, icon }) =>
            subFeatures[key] && (
              <div key={key}>
                <div className="flex items-center gap-2">
                  {icon}
                  <div className="font-medium text-neutral-800">{title}</div>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(transportationInputs[inputKey]),
                  }}
                  className="py-6 my-6 rounded-md px-4"
                ></div>
                <hr className="border-neutral-300" />
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Transportation;
