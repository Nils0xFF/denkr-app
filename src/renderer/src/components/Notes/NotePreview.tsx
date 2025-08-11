import { cn, formatDateFromUnix } from '@renderer/utils';
import { NoteInfo } from '@shared/models';

export type NotePreviewProps = NoteInfo & {
  selected?: boolean;
} & React.ComponentProps<'div'>;

export const NotePreview = ({
  title,
  selected,
  updatedAt,
  className,
  ...props
}: NotePreviewProps): React.JSX.Element => {
  const date = formatDateFromUnix(updatedAt);
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/50': selected,
          'hover:bg-zinc-500/75': !selected,
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  );
};
